// import React from 'react';
// import "./Pagination.css";

// export default function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//           <button
//             className="page-link"
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>
//         </li>
//         {pageNumbers.map((number) => (
//           <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
//             <button
//               onClick={() => onPageChange(number)}
//               className="page-link"
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//         <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//           <button
//             className="page-link"
//             onClick={() => onPageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }