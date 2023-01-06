export const getServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/carts/2');
  const data = await res.json();
  return { props: { data } };
};

const MainPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <hi>hi</hi>
      </div>
    </>
  );
};

export default MainPage;
