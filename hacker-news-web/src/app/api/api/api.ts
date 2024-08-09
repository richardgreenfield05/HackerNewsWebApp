export * from './hackerNews.service';
import { HackerNewsService } from './hackerNews.service';
export * from './heartbeat.service';
import { HeartbeatService } from './heartbeat.service';
export const APIS = [HackerNewsService, HeartbeatService];
