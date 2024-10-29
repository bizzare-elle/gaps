const Footer = () => {
  return (
    <footer className="h-[30vh] bg-primary text-white">
      <div className="flex gap-x-28 m-auto pt-10 max-w-[1400px]">
        <div className="flex-1 flex flex-col gap-y-20">
          <div>
            <h4 className="text-white tracking-wider">GAPS</h4>
            <p className="text-sm max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              nesciunt mollitia, reiciendis eveniet consequuntur nostrum omnis,
              dolor libero delectus ratione nemo saepe! Accusamus temporibus
              officiis voluptatum doloribus. Modi, voluptates. Soluta!
            </p>
          </div>
          <div>
            <span className="text-sm mt-10">@2024 All rights reserved.</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col ">
          <span className="font-medium text-[17px] tracking-wider">
            Send us your feedback!
          </span>
          <p className="text-sm">
            Write us a message and send us your feedback.
          </p>
          <div className="border-b h-[100px] w-[70%] flex justify-end items-end gap-x-5">
            <input
              type="text"
              placeholder="Write your message"
              className="bg-transparent outline-none placeholder:text-white font-light text-sm flex-1"
            />
            <span className="text-sm font-medium">Send</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col font-medium">
          <span>Home</span>
          <span>About Us</span>
          <span>Features</span>
          <span>Mission and Vision</span>
          <span>GAPS Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
