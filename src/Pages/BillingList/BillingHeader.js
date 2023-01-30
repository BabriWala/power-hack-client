import React from "react";
import { useForm } from "react-hook-form";


const BillingHeader = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit2 = data => console.log(data);

  return (
    <div >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h2 className="btn btn-ghost normal-case text-xl">Billings</h2>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label type="submit" htmlFor="my-modal-5">
              <h2
                htmlFor="my-modal-5"
                className="btn btn-ghost normal-case text-xl"
              >
                Add New Bill
              </h2>
            </label>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
    
      <form onSubmit={handleSubmit(onSubmit2)}>
        <div className="modal-box w-11/12 max-w-5xl absolute z-10 top-5 left-0 right-0 mx-auto" style={{left:"0", right: "0", margin: "0 auto", zIndex: "20", top: "100px"}}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                  {...register("phone", { required: true }, {min: 11})}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Payable Amount</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                  {...register("amount", { required: true })}
                />
              </div>
            </div>
          </div>
          <button type="submit">
              Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingHeader;
