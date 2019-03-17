import React from "react";

const Packagelist = ({ packages }) => {
    const { workout } = packages;
    return (
        <div className="col-lg">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={workout.image} />
                <div className="card-body">
                    <h5 className="card-title">{workout.name}</h5>
                    <p className="card-text">{workout.description}</p>
                    <p className="card-text">
                        Duration: {workout.duration} minutes
                    </p>
                    <a
                        href="/workout/{packages.url}/{workout.nameShort}"
                        className="btn btn-primary"
                    >
                        Start Workout {workout.nameShort}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Packagelist;
