import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/Layout'
import Input from '@/Components/Input'
import TextArea from '@/Components/TextArea'
import Select from '@/Components/Select'
import Button from '@/Components/Button'
import DatePicker from '@/Components/DatePicker'

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    slug: '',
    pendiri: '',
    pengasuh: '',
    tanggal_berdiri: '',
    deskripsi: '',
    gender: '',
    program: '',
    tingkat: '',
    program_unggulan: '',
    media_id: '',
    contact: '',
    logo: null,
    video_profil: '',
    foto_sampul: null,
    foto: null,
    validasi: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('pesantren.store'))
  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setData(name, type === 'file' ? files[0] : value)
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Create Pesantren</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="Slug"
          name="slug"
          value={data.slug}
          onChange={handleChange}
          error={errors.slug}
        />
        <Input
          label="Pendiri"
          name="pendiri"
          value={data.pendiri}
          onChange={handleChange}
          error={errors.pendiri}
        />
        <Input
          label="Pengasuh"
          name="pengasuh"
          value={data.pengasuh}
          onChange={handleChange}
          error={errors.pengasuh}
        />
        <DatePicker
          label="Tanggal Berdiri"
          name="tanggal_berdiri"
          value={data.tanggal_berdiri}
          onChange={(date) => setData('tanggal_berdiri', date)}
          error={errors.tanggal_berdiri}
        />
        <TextArea
          label="Deskripsi"
          name="deskripsi"
          value={data.deskripsi}
          onChange={handleChange}
          error={errors.deskripsi}
        />
        <Select
          label="Gender"
          name="gender"
          value={data.gender}
          onChange={handleChange}
          error={errors.gender}
          options={[
            { value: 'putra', label: 'Putra' },
            { value: 'putri', label: 'Putri' },
            { value: 'putra_putri', label: 'Putra & Putri' },
          ]}
        />
        <Input
          label="Program"
          name="program"
          value={data.program}
          onChange={handleChange}
          error={errors.program}
        />
        <Input
          label="Tingkat"
          name="tingkat"
          value={data.tingkat}
          onChange={handleChange}
          error={errors.tingkat}
        />
        <Input
          label="Program Unggulan"
          name="program_unggulan"
          value={data.program_unggulan}
          onChange={handleChange}
          error={errors.program_unggulan}
        />
        <Input
          label="Media ID"
          name="media_id"
          value={data.media_id}
          onChange={handleChange}
          error={errors.media_id}
        />
        <Input
          label="Contact"
          name="contact"
          value={data.contact}
          onChange={handleChange}
          error={errors.contact}
        />
        <Input
          type="file"
          label="Logo"
          name="logo"
          onChange={handleChange}
          error={errors.logo}
        />
        <Input
          label="Video Profil"
          name="video_profil"
          value={data.video_profil}
          onChange={handleChange}
          error={errors.video_profil}
        />
        <Input
          type="file"
          label="Foto Sampul"
          name="foto_sampul"
          onChange={handleChange}
          error={errors.foto_sampul}
        />
        <Input
          type="file"
          label="Foto"
          name="foto"
          onChange={handleChange}
          error={errors.foto}
        />
        <Input
          label="Validasi"
          name="validasi"
          value={data.validasi}
          onChange={handleChange}
          error={errors.validasi}
        />
        <Button type="submit" disabled={processing}>
          Create Pesantren
        </Button>
      </form>
    </Layout>
  )
}

export default Create
