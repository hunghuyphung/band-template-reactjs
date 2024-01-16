import bandMember from '../../../assets/bandmember.jpg';
import './Band.css';

function Band() {
    return (
        <div className="padding-64-16 content-width margin-auto">
            <h2 className="letter-spacing-4">THE BAND</h2>
            <p className="margin-15-0 h-opac"><i>We love music</i></p>
            <p className="margin-15-0 text-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="display-flex padding-32-0 margin-bottom-15 flex-column-small">
                <div className="width-third width-100-small">
                    <p className="margin-15-0">Name</p>
                    <div>
                        <img src={bandMember} alt="" className="width-60 margin-auto border-radius-4"/>
                    </div>
                </div>
                <div className="width-third width-100-small">
                    <p className="margin-15-0">Name</p>
                    <div>
                        <img src={bandMember} alt="" className="width-60 margin-auto border-radius-4"/>
                    </div>
                </div>
                <div className="width-third width-100-small">
                    <p className="margin-15-0">Name</p>
                    <div>
                        <img src={bandMember} alt="" className="width-60 margin-auto border-radius-4"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Band;