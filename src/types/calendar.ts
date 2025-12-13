export interface CalendarResponse {
  groupId: number;
  groupName: string;
  startDate: string;
  member: {
    memberName: string;
    days: {
      date: string; // YYYY-MM-DD
      blocks: number[]; // length 30
    }[];
  }[];
}
