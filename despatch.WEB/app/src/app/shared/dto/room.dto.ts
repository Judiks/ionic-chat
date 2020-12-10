import { ImageResponse, MessageResponse, RoomPrivacyType, RoomResponse, UserResponse } from 'src/swagger/models';

export class RoomDto implements RoomResponse {
    creator?: UserResponse;
    creatorId?: string;
    description?: string;
    images?: ImageResponse[];
    lastMessage?: MessageResponse;
    lastMessageId?: string;
    name?: string;
    privacyType: RoomPrivacyType;
    type: RoomPrivacyType;
    creatingDate: string;
    id?: string;
}
