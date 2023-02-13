import { FC, ReactNode } from 'react';

export type Cell = {
  node: ReactNode;
  key: string;
  ta?: 'center' | 'right' | 'left';
  noPad?: boolean;
  w?: string;
};
export type HCell = Cell & { arrow?: 'up' | 'down'; onClick?(): void };

type Props = {
  headerCells?: HCell[];
  tableRows?: { cells: Cell[]; key: string; onClick?(): void }[];
};

const Table: FC<Props> = ({ headerCells, tableRows }) => {
  return (
    <table className="w-full text-left text-sm [&>*>*>*:last-child]:after:border-transparent [&>*>*>*]:relative [&>*>*>*]:p-3 [&>*>*>*]:after:absolute [&>*>*>*]:after:right-0 [&>*>*>*]:after:top-4 [&>*>*>*]:after:h-4 [&>*>*>*]:after:rounded [&>*>*>*]:after:border-r-2 [&>*>*>*]:after:content-['']">
      <tbody>
        {headerCells && (
          <tr className="bg-primary-light text-white [&>th]:font-normal">
            {headerCells.map(({ node, key, ta, noPad, w, onClick }) => (
              <th
                key={key}
                style={{
                  textAlign: ta,
                  padding: noPad ? '0' : undefined,
                  width: w,
                }}
                onClick={onClick}
                className={onClick ? 'cursor-pointer' : ''}
              >
                {node}
              </th>
            ))}
          </tr>
        )}
        {tableRows?.map(({ cells, ...rest }) => (
          <tr {...rest} className={rest.onClick ? 'cursor-pointer hover:bg-primary-light' : ''}>
            {cells.map(({ key, node, ta }) => (
              <td key={key} style={{ textAlign: ta }}>
                {node}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
