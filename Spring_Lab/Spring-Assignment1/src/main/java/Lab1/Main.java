package Lab1;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		Employee empObj = (Employee) context.getBean("emp");
			System.out.println(empObj.getEmpmId());
			System.out.println(empObj.getEmpName());
			System.out.println(empObj.getEmpSal());
			System.out.println(empObj.getEmpAge());
			System.out.println(empObj.getBusinessUnit().getSubId());
			System.out.println(empObj.getBusinessUnit().getSubName());
			Sbu sbu = (Sbu) context.getBean("sbu");
			Employee emp1 = (Employee) context.getBean("emp1");
		for(Employee emp : sbu.empList)
		{
			System.out.println(emp.getEmpmId());
			System.out.println(emp.getEmpName());
			System.out.println(emp.getEmpSal());
		}
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter Id");
		int id = scan.nextInt();
		boolean temp = false;
		for(Employee emp : sbu.empList)
		{
			if(emp.getEmpmId() == id)
			{
				System.out.println(emp.getEmpName());
				System.out.println(emp.getEmpSal());
				temp=true;
			}
		}
		if(temp==false)
		{
			System.out.println("Id not found");
		}
	}
}