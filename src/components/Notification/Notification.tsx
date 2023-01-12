import { FC, memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { BsArrowRepeat } from "react-icons/bs";
import { NotificationStatuses } from "./types";

export interface NotificationProps {
  message: string;
  status: NotificationStatuses;
  visible: boolean;
  onClose: () => void;
  onRepeat?: () => void;
}

export const Notification: FC<NotificationProps> = memo(
  ({ message, status, visible, onClose, onRepeat }) => {
    if (visible) {
      return (
        <div
          className="flex items-center justify-between gap-4 w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow
                   fixed right-4 animate-drop-down"
          role="alert"
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 text-${status}-500 bg-${status}-100 rounded-lg`}
            >
              <FiAlertCircle />
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
          </div>
          <div className="flex">
            {onRepeat && (
              <button
                title="Send request again"
                className="flex items-center justify-center hover:bg-gray-100 h-8 w-8 rounded-lg"
                onClick={onRepeat}
              >
                <BsArrowRepeat />
              </button>
            )}

            <button
              className="flex items-center justify-center hover:bg-gray-100 h-8 w-8 rounded-lg"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
);

Notification.displayName = "Notification";
