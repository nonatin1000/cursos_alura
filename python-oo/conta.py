class Conta:
    def __init__(self, numero, titular, saldo, limite):
        print(f"Construindo objeto ... {self}")
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite

    def extrato(self):
        print(f"Saldo de {self.__saldo} do titular {self.__titular}")
    
    def __pode_sacar(self, valor):
        return valor <= (self.__saldo + self.__limite)
        
    def deposita(self, valor):
        self.__saldo += valor
        
    def saca(self, valor):
        if self.__pode_sacar(valor):
            self.__saldo -= valor
        else:
            print(f"O valor {valor} passou do limite")
        
    def transfere(self, valor, destino):
        self.saca(valor)
        destino.deposita(valor)
    
    @property    
    def limite(self):
        return self.__limite
    
    @limite.setter
    def limite(self, limite):
        self.__limite = limite
    
    @property
    def saldo(self):
        return self.__saldo
    
    @property
    def titular(self):
        return self.__titular
    
    @staticmethod
    def codigo_banco():
        return "001"
    
    @staticmethod
    def codigos_bancos():
        return {'BB': '001', 'Caixa': '104', 'Bradesco': '237'}
    
    # @property
    # def codigo_banco(self):
    #     return self.__codigo_banco