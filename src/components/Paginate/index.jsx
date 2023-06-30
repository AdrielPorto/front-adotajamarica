import ReactPaginate from "react-paginate";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import { SectionPaginate } from "./styles";

const Paginate = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <SectionPaginate>
      <ReactPaginate
        pageCount={pageNumbers.length}
        previousLabel={<TiArrowLeftOutline size={20} />}
        nextLabel={<TiArrowRightOutline size={20} />}
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
        forcePage={currentPage - 1}
      />
    </SectionPaginate>
  );
};

export default Paginate;
