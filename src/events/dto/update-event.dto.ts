export class UpdateEventDto {
  id: string;
  name: string;
  priority: number;
  type: 'crosspromo' | 'liveops' | 'app' | 'ads';
  description: string;
}
