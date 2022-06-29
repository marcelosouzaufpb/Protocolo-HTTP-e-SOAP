from zeep import Client

def main():
    client = Client('http://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL')

##     AddInteger = client.service.AddInteger(1, 2)
##     print('AddInteger: ', AddInteger)

    DivideInteger = client.service.DivideInteger(2, 1)
    print('DivideInteger: ', DivideInteger)


##    FindPerson = client.service.FindPerson(1)
##    print('FindPerson: ', FindPerson)

##    GetByName = client.service.GetByName('Newton,Dave R.')
##    print('GetByName: ', GetByName)

##    GetDataSetByName = client.service.GetDataSetByName()
##    print('GetDataSetByName: ', GetDataSetByName)

##    GetListByName = client.service.GetListByName()
##    print('GetListByName: ', GetListByName)

##    Mission = client.service.Mission()
##    print('Mission: ', Mission)

##    QueryByName = client.service.QueryByName()
##    print('QueryByName: ', QueryByName)

if __name__ == '__main__':
    main()
