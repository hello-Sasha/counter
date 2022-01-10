
export const Pagination =({todoAmount, amountToShow, onClick})=>{
    const totalPages =
        todoAmount % amountToShow === 0
        ? todoAmount / amountToShow
        : Math.floor(todoAmount / amountToShow) + 1;

    const pagesArr = [...Array(totalPages).keys()].map((item) => item + 1);
    //const array = Array.from({length:3}, (_, index) => index);
    // "from" creates array from obj
    //(_, index) => index)- map, first el is unnes ("_")
    const pages = pagesArr.map((page) => (
        <button key={page} onClick={() => onClick(page)} className="button">
          {page}
        </button>
      ));

    return (
        <div className="pagination">{pages}</div>
    )
}