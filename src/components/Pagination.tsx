interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  return (
    <div className="mt-4 flex justify-center">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-blue-600 mr-2 rounded disabled:opacity-50 hover:cursor-pointer"
      >
        {'<-'} Poprzednia
      </button>
      <button
        disabled={(currentPage - 1) * itemsPerPage + itemsPerPage >= totalItems}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50 hover:cursor-pointer"
      >
        Następna {'->'}
      </button>
    </div>
  );
};

export default Pagination;
