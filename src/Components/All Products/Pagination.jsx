// eslint-disable-next-line react/prop-types
export const Pagination = ({ totalproducts, productsperpage, setcurrentpage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalproducts / productsperpage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center">
      {pages.map((page, idx) => {
        return (
          <button
            onClick={() => setcurrentpage(page)}
            className="p-4 border rounded-lg mx-2 hover:bg-slate-300 font-bold duration-300"
            key={idx}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
