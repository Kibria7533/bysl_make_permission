let p="[\"HRM\",\"HRM/Employee Metadata/Divisions/List\",\"HRM/Employee Metadata/Divisions/Add\",\"HRM/Employee Metadata/Divisions/Edit\",\"HRM/Employee Metadata/Districts/List\",\"HRM/Employee Metadata/Districts/Add\",\"HRM/Employee Metadata/Districts/Edit\",\"HRM/Employee Metadata/Office Divisions/List\",\"HRM/Employee Metadata/Office Divisions/Add\",\"HRM/Employee Metadata/Office Divisions/Edit\",\"HRM/Employee Metadata/Departments/List\",\"HRM/Employee Metadata/Departments/Add\",\"HRM/Employee Metadata/Departments/Edit\",\"HRM/Employee Metadata/Designations/List\",\"HRM/Employee Metadata/Designations/Add\",\"HRM/Employee Metadata/Designations/Edit\",\"HRM/Employee Metadata/Institutes/List\",\"HRM/Employee Metadata/Institutes/Add\",\"HRM/Employee Metadata/Institutes/Edit\",\"HRM/Employee Metadata/Degrees/List\",\"HRM/Employee Metadata/Degrees/Add\",\"HRM/Employee Metadata/Degrees/Edit\",\"HRM/Employee Metadata/Banks/List\",\"HRM/Employee Metadata/Banks/Add\",\"HRM/Employee Metadata/Banks/Edit\",\"HRM/Employee Metadata/Branches/List\",\"HRM/Employee Metadata/Branches/Add\",\"HRM/Employee Metadata/Branches/Edit\",\"HRM/Employee Metadata/Action Types/List\",\"HRM/Employee Metadata/Action Types/Add\",\"HRM/Employee Metadata/Action Types/Edit\",\"HRM/Employee Metadata/Action Reasons/List\",\"HRM/Employee Metadata/Action Reasons/Add\",\"HRM/Employee Metadata/Action Reasons/Edit\",\"HRM/Manage Employee/Employee List/List\",\"HRM/Manage Employee/Employee List/Add\",\"HRM/Manage Employee/Employee List/Edit\",\"HRM/Manage Employee/Leave Status/List\",\"HRM/Manage Employee/Leave Status/Add\",\"HRM/Manage Employee/Leave Status/Edit\",\"HRM/Manage Employee/Attendance/List\",\"FICO\",\"FICO/General Ledger/Divisions/List\",\"FICO/General Ledger/Divisions/Add\",\"FICO/General Ledger/Divisions/Edit\",\"FICO/General Ledger/Districts/List\",\"FICO/General Ledger/Districts/Add\",\"FICO/General Ledger/Districts/Edit\",\"FSCM\"]:[\"HRM\",\"HRM/Manage Employee\",\"HRM/Manage Employee/Attendance\",\"FICO\",\"FSCM\"]";



let spiited=p.split(':');
console.log(spiited[0].replace(/[[\]]/g,'').split(",").map(item=>item.replace(/\"/g,'')));
console.log(spiited[1].replace(/[[\]]/g,'').split(",").map(item=>item.replace(/\"/g,'')));





// useEffect(() => {
//     let p = props.previousPermission && props.previousPermission.split(':');
//     let a =p &&  p[0];
//     let b =p &&   p[1];
//     console.log(a, b)
//     if (b) {
//         //    console.log(b.replace(/[[\]]/g,'').split(",").map(item=>item.replace(/\"/g,'')),'iolo')
//         setExpanded(b.replace(/[[\]]/g, '').split(",").map(item => item.replace(/\"/g, '')))
//     }

//     if (a) {
//         // console.log(a.replace(/[[\]]/g,'').split(",").map(item=>item.replace(/\"/g,'')),'iolo')
//         setCheck(a.replace(/[[\]]/g, '').split(",").map(item => item.replace(/\"/g, '')))
//     }
// }, [])