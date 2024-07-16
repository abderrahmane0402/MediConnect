"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

import React, { useState } from 'react';

export default function VisiteForm() {
  const [formData, setFormData] = useState({
    docteur: '',
    date: '',
    postTravail: '',
    visionOD: '',
    visionOG: '',
    auditionOD: '',
    auditionOG: '',
    maa: '',
    ExamenClinique: '',
    ExamenComplementaires: '',
    ConclusionMedical: ''
  });
  const handleInputChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <div className="grid grid-cols-2 gap-8 border-t-4 border-green-600 p-4">
        <FormField
          name="docteur"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Docteur :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer la nom du docteur"
                  type="text"
                  defaultValue={formData.docteur}
                  onChange={handleInputChange}
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer la Date d'Examen"
                  type="date"
                  defaultValue={formData.date}
                  onChange={handleInputChange}
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
        <FormField
          name="postTravail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post de travail :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer le post de travail"
                  type="text"
                  defaultValue={formData.postTravail}
                  onChange={handleInputChange}
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex gap-6 border-t-4 border-green-600 p-4">
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <h2 className="font-bold text-lg tracking-wide">Vision</h2>
          <div className="flex gap-4">
            <FormField
              name="visionOD"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OD :</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="/10"
                      type="number"
                      defaultValue={formData.visionOD}
                      onChange={handleInputChange}
                      // {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="visionOG"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OG :</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="/10"
                      type="number"
                      defaultValue={formData.visionOG}
                      onChange={handleInputChange}
                      // {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="border-x-2 border-green-600"></div>
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <h2 className="font-bold text-lg tracking-wide">Audition</h2>
          <div className="flex gap-4">
            <FormField
              name="auditionOD"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OD :</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="/10"
                      type="number"
                      defaultValue={formData.auditionOD}
                      onChange={handleInputChange}
                      // {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="auditionOG"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OG :</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="/10"
                      type="number"
                      defaultValue={formData.auditionOG}
                      onChange={handleInputChange}
                      // {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
        <FormField
          name="maa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Maladies , accidents , arrts de travail depuis le dernier examen :
              </FormLabel>
              <FormControl>
                <Textarea
                  defaultValue={formData.maa}
                  onChange={handleInputChange}
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
        <FormField
          name="ExamenClinique"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Examen clinique :</FormLabel>
              <FormControl>
                <Textarea
                  defaultValue={formData.ExamenClinique}
                  onChange={handleInputChange}
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
        <FormField
          name="ExamenComplementaires"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Examen Complementaires :</FormLabel>
              <FormControl>
                <Textarea
                  defaultValue={formData.ExamenComplementaires}
                  onChange={handleInputChange}
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
        <FormField
          name="ConclusionMedical"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conclusion Medicales :</FormLabel>
              <FormControl>
                <Textarea
                  defaultValue={formData.ConclusionMedical}
                  onChange={handleInputChange}
                  // {...field}
                  className="h-auto overscroll-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex items-center justify-center gap-2 w-full pb-2 pt-7">
        <Button type="submit" onClick={handleSubmit}>Ajouter</Button>
      </div>
      </div>
    // </form>
  );
}
