// import React, { Dispatch, SetStateAction } from 'react'
// import { 
//     // ChannelSearch, 
//     ChannelList, useChatContext } from 'stream-chat-react'
// import Cookies from 'universal-cookie/es6';
// import { ChannelSearch } from '.';
// import HospitalIcon from '../assets/hospital.png'
// import LogoutIcon from '../assets/logout.png'
// import TeamChannelPreview from './TeamChannelPreview';
// import TeamChannelList from "./TeamChannelList"


// interface ChannelListContainerProps {
//     isCreating: boolean
//     setIsCreating: Dispatch<SetStateAction<boolean>>
//     setCreateType: Dispatch<SetStateAction<string>>
//     setIsEditing: Dispatch<SetStateAction<boolean>>
// }

// const cookies = new Cookies();

// const SideBar = ({ logout }: any) => (
//     <div className="channel-list__sidebar">
//         <div className="channel-list__sidebar__icon1">
//             <div className="icon1__inner">
//                 <img src={HospitalIcon} alt="Hospital" width="30" />
//             </div>
//         </div>
//         <div className="channel-list__sidebar__icon2">
//             <div className="icon1__inner" onClick={logout}>
//                 <img src={LogoutIcon} alt="Logout" width="30" />
//             </div>
//         </div>
//     </div>
// );
// const CompanyHeader = () => (
//     <div className="channel-list__header">
//         <p className="channel-list__header__text">Medical Pager</p>
//     </div>
// )

// const customChannelTeamFilter = (channels: any) => {
//     return channels.filter((channel: any) => channel.type === 'team');
// }

// const customChannelMessagingFilter = (channels: any) => {
//     return channels.filter((channel: any) => channel.type === 'messaging');
// }

// const ChannelListContainer = ({isCreating, setIsCreating, setCreateType, setIsEditing}: ChannelListContainerProps) => {

//     const logout = () => {
//         cookies.remove('userId');
//         cookies.remove('username');
//         cookies.remove('fullName');
//         cookies.remove('avatarURL');
//         cookies.remove('hashedPassword');
//         cookies.remove('phoneNumber');

//         window.location.reload()
//     }

//     const filters = { members: { $in: [client.userID] } };

//   return (
//     <>
//     <SideBar {...{ logout }} />
//     <div className="channel-list__list__wrapper">
//         <CompanyHeader />
//         <ChannelSearch />
//         {/* Group Messages */}
//         <ChannelList
//             filters={filters}
//             channelRenderFilterFn={customChannelMessagingFilter}
//             List={listProps => <TeamChannelList {...listProps} type="team" /> }
//             Preview={previewProps => <TeamChannelPreview {...previewProps} type="team" /> }
//          />
//          {/* Priavte one */}
//          <ChannelList
//             filters={{}}
//             // channelRenderFilterFn={() => {}}
//             List={listProps => <TeamChannelList {...listProps} type="messaging" /> }
//             Preview={previewProps => <TeamChannelPreview {...previewProps} type="messaging" /> }
//          />
//     </div>
//     </>
//   )
// }

// export default ChannelListContainer


import  {  Dispatch, SetStateAction,  useState } from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import { Link } from 'react-router-dom';


interface ChannelListContainerProps {
    isCreating: boolean
    setIsCreating: Dispatch<SetStateAction<boolean>>
    setCreateType: Dispatch<SetStateAction<string>>
    setIsEditing: Dispatch<SetStateAction<boolean>>
}

const cookies = new Cookies();

const SideBar = ({ logout }: any) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
        <Link to="/team">Team App</Link>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)

const customChannelTeamFilter = (channels: any) => {
    return channels.filter((channel: any) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels: any) => {
    return channels.filter((channel: any) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }: any) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
            
        </>
    );
}

interface ChannelListContainerProps {
    setCreateType: Dispatch<SetStateAction<string>>
    setIsCreating: Dispatch<SetStateAction<boolean>>
    setIsEditing: Dispatch<SetStateAction<boolean>>
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }: ChannelListContainerProps) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            </div>
        </>
    )

}

export default ChannelListContainer;