
const UserProfilePage = ({username}: any): any => {

  return (
    <h1>
      {username}
    </h1>
  )
}

export async function getServerSideProps(context: any) {
  const {params, req, res} = context;

  console.log(req)

  return ({
    props: {
      username: 'Max'
    }
  })
}

export default UserProfilePage
