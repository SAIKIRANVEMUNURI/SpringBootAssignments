package Lab1;

import org.springframework.beans.factory.annotation.Autowired;

public class Employee {
	int empmId;
	String empName;
	String empSal;
	int empAge;
	Sbu businessUnit;
	public Sbu getBusinessUnit() {
		return businessUnit;
	}
	@Autowired
	public void setBusinessUnit(Sbu businessUnit) {
		this.businessUnit = businessUnit;
	}
	public int getEmpmId() {
		return empmId;
	}
	public void setEmpmId(int empmId) {
		this.empmId = empmId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpSal() {
		return empSal;
	}
	public void setEmpSal(String empSal) {
		this.empSal = empSal;
	}
	public int getEmpAge() {
		return empAge;
	}
	public void setEmpAge(int empAge) {
		this.empAge = empAge;
	}
	public Sbu sbuDetails()
	{
		return businessUnit;
	}
}