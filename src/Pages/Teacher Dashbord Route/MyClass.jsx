import Swal from "sweetalert2";
import UseMyClass from "../../Hooks/UseMyClass";

const MyClass = () => {
  const [myClass] = UseMyClass();
  // const axiosSecure = UseAxiosSecure();
  // const { data: classInfos = [], refetch } = useQuery({
  //   queryKey: ["classInfo"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/classInfo");
  //     return res.data;
  //   },
  // });

  const handleDeleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classInfo/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      {/* {myClass.length} */}
      {/* {myClass.displayName} */}
      <div className="card w-96 bg-base-100 shadow-xl mb-14 bg-transparent">
        {myClass.map((item) => (
          <div
            key={item._id}
            className="card-body items-center text-center m-9 flex"
          >
            <figure className="px-10 pt-10">
              <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <h2 className="card-title"> {item.title} </h2>
            <p className="text-lg font-semibold">Price: ${item.price} </p>
            <p className="text-lg font-semibold">
              Instructor: {item.displayName}{" "}
            </p>
            <p className="text-lg font-semibold">Email: {item.email} </p>
            <p className="font-semibold">Description: </p>
            <p className="font-semibold">{item.description} </p>
            <div></div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default MyClass;
