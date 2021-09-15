import {
  ListWrapper,
  Title,
  Hash,
  BottomItems,
  Joined,
  Bull,
  Span,
  Button,
  Text,
} from "./styles/RoomStyles";
const JoinedRoomsList = ({ title, members, unread }) => {
  return (
    <ListWrapper>
      <Title>
        <Hash>#</Hash>
        {title}
      </Title>
      <BottomItems>
        <Joined>&#10003;</Joined>
        <Text> Joined</Text>
        <Bull>&bull;</Bull>
        <Span>{members} members</Span>
        <Bull>&bull;</Bull>
        <Span>{unread} unread</Span>
      </BottomItems>
      <Button className={`leave`}>leave</Button>
    </ListWrapper>
  );
};

const JoinedRooms = ({ rooms }) => {
  return (
    <ul>
      {rooms.map((room) => (
        <JoinedRoomsList key={room.id} {...room} />
      ))}
    </ul>
  );
};
export default JoinedRooms;
