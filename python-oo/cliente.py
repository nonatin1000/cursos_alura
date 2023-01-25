class Cliente:
    def __init__(self, nome, cpf, telefone):
        self.__nome = nome
        self.cpf = cpf
        self.telefone = telefone
    
    @property    
    def nome(self):
        return self.__nome.title()
    
    @nome.setter
    def nome(self, nome):
        self.__nome = nome