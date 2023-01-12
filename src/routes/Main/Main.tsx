import { FC, useCallback, useEffect, useState } from "react";
import { useProjects } from "../../hooks/useProjects/useProjects";
import _ from "lodash";
import { FiArrowUpCircle } from "react-icons/fi";
import { Notification } from "../../components/Notification/Notification";
import { NotificationStatuses } from "../../components/Notification/types";
import { ProjectList } from "./components/ProjectList";

export const Main: FC = () => {
  const { projects, isLoadingMoreProjects, getMoreProjects, error } =
    useProjects();

  const [isVisibleBackTopButton, setIsVisibleBackTopButton] = useState(false);
  const [isVisibleNotification, setIsVisibleNotification] = useState(false);

  /**
   * Колбек, который вызывается при скроле страницы
   */
  const handleScroll = _.throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const isBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 1;

    /**
     * Если скролл больше 200, то показывыю кнопку скролла наверх страницы, иначе прячу кнопку
     */
    if (scrollTop > 200) {
      setIsVisibleBackTopButton(true);
    } else {
      setIsVisibleBackTopButton(false);
    }

    /**
     * Если проскролили до конца страницы, то запрашиваю новые проекты
     */
    if (isBottom) {
      void getMoreProjects();
    }
  }, 1000);

  const handleBackTopButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNotificationClose = useCallback(() => {
    setIsVisibleNotification(false);
  }, []);

  const handleNotificationRepeat = useCallback(() => {
    void getMoreProjects(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisibleNotification(Boolean(error));
  }, [error]);

  return (
    <div>
      <ProjectList
        projects={projects}
        isLoadingMoreProjects={isLoadingMoreProjects}
      />
      {isVisibleBackTopButton && (
        <button onClick={handleBackTopButtonClick}>
          <FiArrowUpCircle
            className="fixed shadow-lg rounded-3xl bottom-12 right-8 cursor-pointer"
            size={36}
          />
        </button>
      )}
      <Notification
        visible={isVisibleNotification}
        message={error || ""}
        status={NotificationStatuses.Error}
        onClose={handleNotificationClose}
        onRepeat={handleNotificationRepeat}
      />
    </div>
  );
};
