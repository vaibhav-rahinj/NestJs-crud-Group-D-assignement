import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { Observable } from "rxjs";
import { Userdata } from "./userdata.interface";
import { UserdataService } from "./userdata.service";
import { ValidateUserdata } from "./userdata.validation";

@Controller('userdata')
export class UserdataController {
  constructor(private userdataService: UserdataService) {}
 
  @Post()
  create(@Body() userdata: ValidateUserdata): Observable<Userdata> {
    return this.userdataService.createUser(userdata);
  }

  @Get()
  findAllUserdata(): Observable<Userdata[]> {
    return this.userdataService.findAllUserdatas();
  }
}
