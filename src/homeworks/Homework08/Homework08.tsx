import Button from "../../components/Button/Button";

export const Homework08 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Обычная кнопка */}
      <Button
        name="Enabled Button"
        onClick={() => alert("Enabled Button Clicked!")}
      />

      {/* Отключенная кнопка */}
      <Button
        name="Disabled Button"
        type="button"
        onClick={() => {}}
        disabled
      />
    </div>
  );
};
