import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import type { Payable } from "@prisma/client";

import { FindPayableByIdPipe } from "./find-payable-by-id.pipe";
import { FindPayableByIdOutputDTO } from "./find-payable-by-id-output.dto";

@Controller()
export class FindPayableByIdController {
  @Get("/integrations/payable/:id")
  async handle(
    @Param("id", ParseUUIDPipe, FindPayableByIdPipe) payable: Payable,
  ) {
    return new FindPayableByIdOutputDTO(
      payable.id,
      payable.value,
      payable.emissionDate,
      payable.assignorId,
    );
  }
}
