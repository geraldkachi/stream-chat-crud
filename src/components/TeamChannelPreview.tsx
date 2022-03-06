import {Dispatch, SetStateAction} from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

interface TeamChannelPreviewProps {
    type: string
    channel: any
    setToggleContainer: Dispatch<SetStateAction<boolean>>
    setIsCreating: Dispatch<SetStateAction<boolean>> | any
    setIsEditing: Dispatch<SetStateAction<boolean>> | any
    setActiveChannel?: any
}

const TeamChannelPreview = ({channel, type, setIsCreating, setIsEditing, setToggleContainer, setActiveChannel}: TeamChannelPreviewProps) => {
    const { channel: activeChannel, client } = useChatContext()

    const ChannelPreview = () => (
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    )

    // Data struction of the chat
    // [{}, {}]

    // {
    //     "123": {},
    //     "1234": {},
    //     "12345": {}
    // }

    const DirectPreview = () => {
        const members: any[] = Object.values(channel?.state.members)
        .filter(({user}: any) => user.id !== client.userId)
        
        return (
            <div className="channel-preview__item single">
                <Avatar 
                image={members[0]?.user?.image}
                name={members[0]?.user?.fullName}
                size={24}
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>
        )
    }
    
  return (
    <div className={
        channel?.id === activeChannel?.id 
        ? "channel-preview__wrapper__selected"
        : "channel-preview"}
        onClick={() =>{
            setIsCreating(false);
            setIsEditing(false);
            setActiveChannel(channel);
            if(setToggleContainer) setToggleContainer((prevState) => !prevState)
        }}
    >
        {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </div>
  )
}

export default TeamChannelPreview