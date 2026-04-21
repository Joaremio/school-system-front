"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ClassroomForm() {
  const [formData, setFormData] = useState({
    shift: "MATUTINO",
    startTime: "",
    endTime: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();

  //   await fetch("http://localhost:8080/classrooms", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //     credentials: "include",
  //   });
  // }

  return (
    <form>
      <div className="lg:col-span-2">
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-2">Dados da turma</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* TURNOS */}
            <div className="md:col-span-2 space-y-2">
              <Label>Turno *</Label>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option value="MATUTINO">Matutino</option>
                <option value="VESPERTINO">Vespertino</option>
                <option value="NOTURNO">Noturno</option>
              </select>
            </div>

            {/* HORÁRIO INÍCIO */}
            <div>
              <Label>Horário início *</Label>
              <Input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>

            {/* HORÁRIO FIM */}
            <div>
              <Label>Horário fim *</Label>
              <Input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="md:col-span-2">
              <Button type="submit" className="w-full cursor-pointer">
                Criar turma
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
}
