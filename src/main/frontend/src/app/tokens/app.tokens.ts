import {LogLevel} from "../component/first-step-chapter-5/first-step-chapter5/services/logger.service";
import {InjectionToken} from "@angular/core";


export const LOG_LEVEL_TOKEN= new InjectionToken<LogLevel>('Log Level');
