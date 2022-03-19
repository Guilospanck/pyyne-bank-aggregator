import { GetBalancesUsecase } from "@app/usecases/get_balances.usecase";
import { GetTransactionsUsecase } from "@app/usecases/get_transaction.usecase";
import { BankAdapter } from "@infra/adapters/bank.adapter";
import { RouteAdapter } from "@infra/adapters/express.router.adapter";
import { Bank1AccountSource } from "@infra/Bank1/Bank1AccountSource";
import { Bank2AccountSource } from "@infra/Bank2/Bank2AccountSource";
import { BankController } from "@interfaces/controllers/bank.controller";
import { Router } from "express";

const bankRouter = Router();

const bank1 = new Bank1AccountSource();
const bank2 = new Bank2AccountSource();

const bankAdapter = new BankAdapter(bank1, bank2);

const getBalancesUsecase = new GetBalancesUsecase(bankAdapter)
const getTransactionsUsecase = new GetTransactionsUsecase(bankAdapter);

const bankController = new BankController(getBalancesUsecase, getTransactionsUsecase);

bankRouter.get(
  '/balances',
  RouteAdapter(bankController.getBalances.bind(bankController))
);

bankRouter.get(
  '/transactions',
  RouteAdapter(bankController.getTransactions.bind(bankController))
);

export default bankRouter;