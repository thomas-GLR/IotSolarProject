import { ReadingDevice } from "./readingDevice.model";
import { Temperature } from "./temperature.model";
import { HttpErrorResponse } from "@angular/common/http";

export interface HomeState {
  temperatures: Temperature[];
  error: HttpErrorResponse | null
}
