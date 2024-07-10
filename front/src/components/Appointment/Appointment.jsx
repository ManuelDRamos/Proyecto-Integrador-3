/* eslint-disable react/prop-types */


const Appointment = ({date, time, description, id, status}) => {
    return (
        <div>
            <section>
                <p>{id}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p>{status?.toUpperCase()}</p>
            </section>
            <section>
                <p>{description}</p>
            </section>
            <button>Cancelar</button>
        </div>
    )
};

export default Appointment;