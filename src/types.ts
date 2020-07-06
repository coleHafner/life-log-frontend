export type LogEntry = {
  UUID: string;
  owner: string;
  date: Date;
  category: LogEntryCategory;
  thing: string;
  notes1: string;
  notes2: string;
  notes3: string;
  notes4: string;
}

enum LogEntryCategory {
  Life = 'life',
  House = 'house'
}
