import {
  IJournalExperienceItem,
  IJournalItem,
} from "../services/types/journal";

export function isExperience(obj: IJournalItem): obj is IJournalExperienceItem {
  return "name" in obj;
}
