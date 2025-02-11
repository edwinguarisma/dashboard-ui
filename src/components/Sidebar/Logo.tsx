import logo_negativo from "../../img/logo-negativo.png";

export const Logo = () => {
  return (
    <div className="p-8">
      <img
        className="w-[150px] mx-auto"
        src={logo_negativo}
        alt="Logo Edwin Guarisma"
      />
    </div>
  );
};
