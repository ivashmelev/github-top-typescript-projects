import {useEffect, useRef, useState} from "react";
import {oktokit} from "../../api";
import {ProjectDto, UseProjects} from "./types";
import {perPage} from "./constants";

/**
 * Хук для работы с данными по проектам
 */
export const useProjects = (): UseProjects => {
  const [projects, setProjects] = useState<ProjectDto[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMoreProjects, setIsLoadingMoreProjects] =
    useState<boolean>(false);

  /**
   * Номер страницы
   */
  const page = useRef<number>(1);

  /**
   * Строка в которой содержатся критерии поиска для нужного нам списка
   * Сохраняю ее чтобы обращаться к ней для получения новых проектов
   */
  const defaultQuery = useRef<string>();

  /**
   * Получаю проекты
   * @param query строка с критериями поиска
   */
  const getProjects = async (query: string) => {
    try {
      setIsLoading(true);
      setError(undefined);

      /**
       * При вызове getProjects презаписываю строку с критериями поиска
       */
      defaultQuery.current = query;

      const response = await oktokit.rest.search.repos({
        q: query,
        per_page: perPage,
        page: page.current,
      });

      setProjects(response.data.items);
    } catch (error) {
      setError("Couldn't get projects");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Получаю дополнительные проекты и добавляю их к общему списку
   * @param increasePage флаг указывающий на то, нужно ли увеличить страницу
   */
  const getMoreProjects = async (increasePage: boolean = true) => {
    try {
      setIsLoadingMoreProjects(true);
      setError(undefined);

      const response = await oktokit.rest.search.repos({
        q: defaultQuery.current || "",
        per_page: perPage,
        page: page.current + 1,
      });

      /**
       * Если это не последняя страница и установлен флаг на увеличение страницы, то
       * увеличиваю текущую страницу
       */
      if (!response.data.incomplete_results && increasePage) {
        page.current += 1;
      }

      setProjects((prevState) => [...prevState, ...response.data.items]);
    } catch (error) {
      setError("Couldn't get more projects");
    } finally {
      setIsLoadingMoreProjects(false);
    }
  };

  useEffect(() => {
    void getProjects("topic:typescript");
  }, []);

  return { projects, isLoading, error, getMoreProjects, isLoadingMoreProjects };
};
