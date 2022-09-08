import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = e =>{
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  }
  return (
    <div>
      {/* Put this part before </body> tag  */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-primary">
            You are booking for : <span className="text-accent-focus">{name}</span>
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-4 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option className="p-1" value={slot} key={slot._id}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name" name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email" name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text" name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary input input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
