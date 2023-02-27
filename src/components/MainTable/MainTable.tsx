import React from "react";
import { IUserWalletProps } from "../../interfaces/components/UserWallet";

const MainTable: React.FC<IUserWalletProps> = ({
  tableData=[],
  tableColumns = [],
}: IUserWalletProps) => {

  return (
    
    <table className="wallet-table">
      <thead className="table-header">
        <tr className="header-title">
          {tableColumns.map((str) => (
            <th className="title-text">{str}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {tableData.map((obj: any) => (
          <tr className="body-item">
            {Object.values(obj).map((value: any) => (
              <td className="item-value">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
