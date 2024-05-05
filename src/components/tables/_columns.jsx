// @ts-nocheck
import SimpleInfo from "../SimpleInfo";
import { CustomHeader } from "./UserCustomHeader";

const Columns = [
  {
    Header: (props) => <CustomHeader tableProps={props} title="Prénom" />,
    id: "first_name",
    Cell: ({ ...props }) => (
      <SimpleInfo value={`${props.data[props.row.index].first_name}`} />
    ),
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Nom" />,
    id: "last_name",
    Cell: ({ ...props }) => (
      <SimpleInfo value={`${props.data[props.row.index].last_name}`} />
    ),
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Email" />,
    id: "email",
    Cell: ({ ...props }) => (
      <SimpleInfo value={`${props.data[props.row.index].email}`} />
    ),
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Genre" />,
    id: "gender",
    Cell: ({ ...props }) => (
      <SimpleInfo value={`${props.data[props.row.index].gender}`} />
    ),
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Adresse IP" />,
    id: "ip_address",
    Cell: ({ ...props }) => (
      <SimpleInfo value={`${props.data[props.row.index].ip_address}`} />
    ),
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader
  //       tableProps={props}
  //       title="Description"
  //       className="min-w-125px"
  //     />
  //   ),
  //   id: "description",
  //   Cell: ({ ...props }) => (
  //     <SimpleInfo
  //       value={Truncate(props.data[props.row.index].description, 30)}
  //     />
  //   ),
  // },
];

export { Columns };
