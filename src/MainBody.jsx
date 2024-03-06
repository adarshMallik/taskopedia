import StudentReview from "./StudentReview";
import Students from "./student";

export default function MainBody() {
  const whatWewillLearn = "React Js";
  const value = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this course we will learn {whatWewillLearn} by building taskopedia
      </p>
      <p>Total value: {value}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and class component</li>
      </ul>
      {/* <div>
          Enter Task : <input maxLength={5} readOnly={false} placeholder="Enter text"></input>
        </div> */}
      <div className="container row">Students Enrolled</div>
      <Students
        fullname="adarsh"
        programmingExp={2}
        headshot="https://api.lorem.space/image/face?w=150&h=153"
      >
        <StudentReview />
      </Students>
      <Students
        fullname="rahul"
        programmingExp={3}
        headshot="https://api.lorem.space/image/face?w=150&h=151"
      >
        <StudentReview />
      </Students>
      <Students
        fullname="kumar"
        programmingExp={5}
        headshot="https://api.lorem.space/image/face?w=150&h=150"
      />
    </div>
  );
}
