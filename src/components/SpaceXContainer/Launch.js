const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small: img}} = launch;

    return (
        <div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img src={img} alt={mission_name}/>
        </div>
    );
};

export {Launch};