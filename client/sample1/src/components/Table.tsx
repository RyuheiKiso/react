import React, { useState, useMemo } from 'react';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

type TableProps = {
  headers: string[];
  data: Array<Record<string, any>>;
  trackInteraction?: (event: Event, metadata?: any) => void;
};

const Table: React.FC<TableProps> = ({ headers, data, trackInteraction }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleRowClick = (row: Record<string, any>) => {
    if (trackInteraction) {
      trackInteraction(new Event('row-click'), { row });
    }
  };

  const sortRows = (key: string) => {
    let newOrder: 'asc' | 'desc' = 'asc';
    if (sortKey === key && sortOrder === 'asc') {
      newOrder = 'desc';
    }
    setSortKey(key);
    setSortOrder(newOrder);
    if (trackInteraction) {
      trackInteraction(new Event('sort-rows'), { key, order: newOrder });
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} onClick={() => sortRows(header)}>
                {header} {sortKey === header ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, rowIndex) => (
            <TableRow key={rowIndex} onClick={() => handleRowClick(row)}>
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
