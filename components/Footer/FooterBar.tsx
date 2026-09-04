export function FooterBar() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-black/5 px-6 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-black/55 sm:text-left">
          © {year} CondominiosYa. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
