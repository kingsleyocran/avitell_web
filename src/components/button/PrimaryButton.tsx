import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

type Props = {
  isLoading?: boolean;
  onClicked: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isWide?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  title: string;
  additionalClassname?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function PrimaryButton({
  isLoading = false,
  onClicked,
  isWide = true,
  title,
  disabled = false,
  rounded = false,
  type = "button",
  additionalClassname = " ",
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClicked}
      type={type}
      className={`${additionalClassname} ${
        isWide ? "w-full" : "px-8"
      } flex flex-row justify-center items-center ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${
        disabled
          ? "cursor-not-allowed opacity-30"
          : "hover:bg-th-accent-dark"
      } bg-th-accent-medium h-[45px] md:h-[55px] text-white paragraph-text transition-all duration-200 whitespace-nowrap`}
    >
      {isLoading ? (
        <Spin
          style={{
            color: "white",
          }}
          className={`text-white font-black`}
          indicator={
            <LoadingOutlined style={{ fontSize: 18 }} spin rev={undefined} />
          }
        />
      ) : (
        title
      )}
    </button>
  );
}
