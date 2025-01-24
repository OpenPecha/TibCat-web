import toast from "react-hot-toast";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning"; // Toast type, default is 'success'
  style?: React.CSSProperties; // Optional custom style for the toast
}

export default function Toast({
  message,
  type = "success",
  style,
}: ToastProps) {
  // Apply default style, and merge it with any custom styles passed as props
  const defaultStyle = {
    border: "1px solid #D4D4D4",
    padding: "14px",
    fontSize: "14px",
    fontWeight: "500",
    ...style, // Merging custom styles with default styles
  };

  // Determine toast type, and show the toast accordingly
  if (type === "success") {
    toast.success(message, {
      style: defaultStyle,
    });
  } else if (type === "error") {
    toast.error(message, {
      style: defaultStyle,
    });
  } else if (type === "info") {
    toast(message, {
      icon: "ℹ️",
      style: defaultStyle,
    });
  } else if (type === "warning") {
    toast(message, {
      icon: "⚠️",
      style: defaultStyle,
    });
  }
}
