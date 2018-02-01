import React from 'react';

const Header = (props) => {
  const { columns, onClick } = props;

  return(
    <thead>
    <tr>
      {columns.map((element, index) =>
        <th
          key={index}
          className={element.sort === 'asc' ? 'is-sortASC sorting-block text-nowrap' : element.sort === 'desc' ? 'is-sortDESC sorting-block text-nowrap' : 'sorting-block text-nowrap'}
          onClick={() => onClick(index, element.sort)} >
          {element.label}
        </th>
      )}
    </tr>
    </thead>
  );
}

export default Header