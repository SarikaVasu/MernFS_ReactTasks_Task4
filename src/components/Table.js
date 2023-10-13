
const Table = ({data}) => {
  return (
    <main>
        <table>
            <tr className="theader">
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            {
                data.map((item,index) => {
                    return(
                        <tr>
                            <td key={index}>{item.id}</td>
                            <td className="Profile"><img src={item.image} alt="Profile Picture" className="ProfilePic" /></td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.domain}</td>
                            <td>{item.ip}</td>
                            <td>{item.university}</td>
                        </tr>      
                    )})
            }
        </table>
        
    </main>
  )
}

export default Table