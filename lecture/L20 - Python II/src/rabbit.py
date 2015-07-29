class Rabbit:
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def eat(self, food):
		print(self.name + " eats a lot of " + food + "! Nom nom nom...")

	def sleep(self):
		print(self.name + " sleeps on your shoes.")

petey = Rabbit("Petey", .67)
print(petey.age)
petey.sleep()